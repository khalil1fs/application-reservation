from typing import List

import fastapi
from fastapi import Depends
from sqlalchemy.orm import Session
from fastapi_pagination import Page, paginate

from converter import client_converter
from database import get_db
from services import client_service

router = fastapi.APIRouter(
    prefix='/client',
    tags=['Client']
)

get_db = get_db

@router.get('/', response_model=List[client_converter.ClientVo])
async def findAll(db: Session = Depends(get_db)):
    return client_service.findAll(db)


@router.get('/cin/', response_model=client_converter.ClientVo)
async def findByCin(ref: str, db: Session = Depends(get_db)):
    return client_service.findByCin(db, ref)


@router.post('/filter', response_model=Page[client_converter.ClientVo])
async def search(entity: client_converter.ClientFilter, db: Session = Depends(get_db)):
    return paginate(client_service.search(db, entity))


@router.get('/page', response_model=Page[client_converter.ClientVo])
async def findAllPage(db: Session = Depends(get_db)):
    return paginate(client_service.findAll(db))


@router.post('/', response_model=client_converter.ClientVo)
async def save(entity: client_converter.ClientCreate, db: Session = Depends(get_db)):
    return client_service.save(db, entity)


@router.put('/', response_model=client_converter.ClientVo)
async def edit(entity: client_converter.ClientEdit, db: Session = Depends(get_db)):
    return client_service.edit(db, entity)


@router.get('/{id}/', response_model=client_converter.ClientVo)
async def findById(id: int, db: Session = Depends(get_db)):
    return client_service.findById(db, id)


@router.delete('/{id}/')
async def delete(id: int, db: Session = Depends(get_db)):
    return client_service.delete(db, id)

