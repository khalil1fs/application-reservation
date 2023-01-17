from typing import List

import fastapi
from fastapi import Depends
from sqlalchemy.orm import Session
from fastapi_pagination import Page, paginate

from converter import chambre_converter
from database import get_db
from services import chambre_service

router = fastapi.APIRouter(
    prefix='/chambre',
    tags=['Chambre']
)

get_db = get_db

@router.get('/', response_model=List[chambre_converter.ChambreVo])
async def findAll(db: Session = Depends(get_db)):
    return chambre_service.findAll(db)


@router.post('/filter', response_model=Page[chambre_converter.ChambreVo])
async def search(entity: chambre_converter.ChambreFilter, db: Session = Depends(get_db)):
    return paginate(chambre_service.search(db, entity))


@router.get('/page', response_model=Page[chambre_converter.ChambreVo])
async def findAllPage(db: Session = Depends(get_db)):
    return paginate(chambre_service.findAll(db))


@router.post('/', response_model=chambre_converter.ChambreVo)
async def save(entity: chambre_converter.ChambreCreate, db: Session = Depends(get_db)):
    return chambre_service.save(db, entity)


@router.put('/', response_model=chambre_converter.ChambreVo)
async def edit(entity: chambre_converter.ChambreEdit, db: Session = Depends(get_db)):
    return chambre_service.edit(db, entity)


@router.get('/{id}/', response_model=chambre_converter.ChambreVo)
async def findById(id: int, db: Session = Depends(get_db)):
    return chambre_service.findById(db, id)


@router.delete('/{id}/')
async def delete(id: int, db: Session = Depends(get_db)):
    return chambre_service.delete(db, id)

