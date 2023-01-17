from typing import List

import fastapi
from fastapi import Depends
from sqlalchemy.orm import Session
from fastapi_pagination import Page, paginate

from converter import reservation_converter
from database import get_db
from services import reservation_service

router = fastapi.APIRouter(
    prefix='/reservation',
    tags=['Reservation']
)

get_db = get_db

@router.get('/', response_model=List[reservation_converter.ReservationVo])
async def findAll(db: Session = Depends(get_db)):
    return reservation_service.findAll(db)


@router.get('/reference/', response_model=reservation_converter.ReservationVo)
async def findByReference(ref: str, db: Session = Depends(get_db)):
    return reservation_service.findByReference(db, ref)


@router.post('/filter', response_model=Page[reservation_converter.ReservationVo])
async def search(entity: reservation_converter.ReservationFilter, db: Session = Depends(get_db)):
    return paginate(reservation_service.search(db, entity))


@router.get('/page', response_model=Page[reservation_converter.ReservationVo])
async def findAllPage(db: Session = Depends(get_db)):
    return paginate(reservation_service.findAll(db))


@router.post('/', response_model=reservation_converter.ReservationVo)
async def save(entity: reservation_converter.ReservationCreate, db: Session = Depends(get_db)):
    return reservation_service.save(db, entity)


@router.put('/', response_model=reservation_converter.ReservationVo)
async def edit(entity: reservation_converter.ReservationEdit, db: Session = Depends(get_db)):
    return reservation_service.edit(db, entity)


@router.get('/{id}/', response_model=reservation_converter.ReservationVo)
async def findById(id: int, db: Session = Depends(get_db)):
    return reservation_service.findById(db, id)


@router.delete('/{id}/')
async def delete(id: int, db: Session = Depends(get_db)):
    return reservation_service.delete(db, id)

