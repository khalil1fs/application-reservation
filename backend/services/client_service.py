from fastapi import HTTPException
from sqlalchemy import desc, select
from sqlalchemy.orm import Session

from converter.client_converter import ClientCreate, ClientEdit, ClientFilter
from models.client import Client
from services.utils import Util


def findById(db: Session, id: int):
    founded = db.query(Client).filter(Client.id == id).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Client with id: {id} does not exist')


def findByCin(db: Session, ref: str):
    founded = db.query(Client).filter(Client.cin == ref).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Client with Client: {ref} does not exist')


def findAll(db: Session):
    return db.query(Client).order_by(desc(Client.id)).all()


def save(db: Session, entity: ClientCreate):
    client = Client(**entity.dict())
    return Util.save(db, client)


def edit(db: Session, entity: ClientEdit):
    client = db.query(Client).get(entity.id)
    entity = entity.dict(exclude_unset=True)
    return Util.update(db, client, entity)


def delete(db: Session, id: int):
    db.query(Client).filter(Client.id == id).delete(synchronize_session=False)
    db.commit()
    return 1


def search(db: Session, entity: ClientFilter):
    query = select(Client)
    query = entity.filter(query)
    query = entity.sort(query)
    result = db.execute(query)
    return result.scalars().all()


