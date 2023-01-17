from typing import List

import fastapi
from fastapi import Depends
from sqlalchemy.orm import Session
from fastapi_pagination import Page, paginate

from converter import categorie_converter
from database import get_db
from services import categorie_service

router = fastapi.APIRouter(
    prefix='/categorie',
    tags=['Categorie']
)

get_db = get_db

@router.get('/', response_model=List[categorie_converter.CategorieVo])
async def findAll(db: Session = Depends(get_db)):
    return categorie_service.findAll(db)


@router.get('/reference/', response_model=categorie_converter.CategorieVo)
async def findByReference(ref: str, db: Session = Depends(get_db)):
    return categorie_service.findByReference(db, ref)


@router.get('/page', response_model=Page[categorie_converter.CategorieVo])
async def findAllPage(db: Session = Depends(get_db)):
    return paginate(categorie_service.findAll(db))


@router.post('/', response_model=categorie_converter.CategorieVo)
async def save(entity: categorie_converter.CategorieCreate, db: Session = Depends(get_db)):
    return categorie_service.save(db, entity)


@router.put('/', response_model=categorie_converter.CategorieVo)
async def edit(entity: categorie_converter.CategorieEdit, db: Session = Depends(get_db)):
    return categorie_service.edit(db, entity)


@router.get('/{id}/', response_model=categorie_converter.CategorieVo)
async def findById(id: int, db: Session = Depends(get_db)):
    return categorie_service.findById(db, id)


@router.delete('/{id}/')
async def delete(id: int, db: Session = Depends(get_db)):
    return categorie_service.delete(db, id)

