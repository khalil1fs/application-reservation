from fastapi import HTTPException
from sqlalchemy import desc, select
from sqlalchemy.orm import Session

from converter.chambre_converter import ChambreCreate, ChambreEdit, ChambreFilter
from models.chambre import Chambre
from services.utils import Util


def findById(db: Session, id: int):
    founded = db.query(Chambre).filter(Chambre.id == id).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Chambre with id: {id} does not exist')


def findAll(db: Session):
    return db.query(Chambre).order_by(desc(Chambre.id)).all()


def save(db: Session, entity: ChambreCreate):
    chambre = Chambre(**entity.dict())
    return Util.save(db, chambre)


def edit(db: Session, entity: ChambreEdit):
    chambre = db.query(Chambre).get(entity.id)
    entity = entity.dict(exclude_unset=True)
    return Util.update(db, chambre, entity)


def delete(db: Session, id: int):
    db.query(Chambre).filter(Chambre.id == id).delete(synchronize_session=False)
    db.commit()
    return 1


def search(db: Session, entity: ChambreFilter):
    query = select(Chambre)
    query = entity.filter(query)
    query = entity.sort(query)
    result = db.execute(query)
    return result.scalars().all()


