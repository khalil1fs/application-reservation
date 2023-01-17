from fastapi import HTTPException
from sqlalchemy import desc, select
from sqlalchemy.orm import Session

from converter.reservation_converter import ReservationCreate, ReservationEdit, ReservationFilter
from models.reservation import Reservation
from services.utils import Util


def findById(db: Session, id: int):
    founded = db.query(Reservation).filter(Reservation.id == id).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Reservation with id: {id} does not exist')


def findByReference(db: Session, ref: str):
    founded = db.query(Reservation).filter(Reservation.reference == ref).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Reservation with Reservation: {ref} does not exist')


def findAll(db: Session):
    return db.query(Reservation).order_by(desc(Reservation.id)).all()


def save(db: Session, entity: ReservationCreate):
    reservation = Reservation(**entity.dict())
    return Util.save(db, reservation)


def edit(db: Session, entity: ReservationEdit):
    reservation = db.query(Reservation).get(entity.id)
    entity = entity.dict(exclude_unset=True)
    return Util.update(db, reservation, entity)


def delete(db: Session, id: int):
    db.query(Reservation).filter(Reservation.id == id).delete(synchronize_session=False)
    db.commit()
    return 1


def search(db: Session, entity: ReservationFilter):
    query = select(Reservation)
    query = entity.filter(query)
    query = entity.sort(query)
    result = db.execute(query)
    return result.scalars().all()


