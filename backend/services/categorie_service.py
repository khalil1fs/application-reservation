from fastapi import HTTPException
from sqlalchemy import desc
from sqlalchemy.orm import Session

from converter.categorie_converter import CategorieCreate, CategorieEdit
from models.categorie import Categorie
from services.utils import Util


def findById(db: Session, id: int):
    founded = db.query(Categorie).filter(Categorie.id == id).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Categorie with id: {id} does not exist')


def findByReference(db: Session, ref: str):
    founded = db.query(Categorie).filter(Categorie.reference == ref).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Categorie with Categorie: {ref} does not exist')


def findAll(db: Session):
    return db.query(Categorie).order_by(desc(Categorie.id)).all()


def save(db: Session, entity: CategorieCreate):
    categorie = Categorie(**entity.dict())
    return Util.save(db, categorie)


def edit(db: Session, entity: CategorieEdit):
    categorie = db.query(Categorie).get(entity.id)
    entity = entity.dict(exclude_unset=True)
    return Util.update(db, categorie, entity)


def delete(db: Session, id: int):
    db.query(Categorie).filter(Categorie.id == id).delete(synchronize_session=False)
    db.commit()
    return 1


