import datetime
from converter.base_model import BaseModelConfig
from typing import Optional

from fastapi_filter.contrib.sqlalchemy import Filter

from models.chambre import Chambre
from converter.categorie_converter import CategorieVo
from fastapi_filter.contrib.sqlalchemy import Filter


class ChambreCreate(BaseModelConfig):
    telephone: Optional[str]
    address: Optional[str]
    nbrLit: Optional[int]
    addedAt: Optional[datetime.datetime]
    available: Optional[bool]

    categorie_id: Optional[int]

class ChambreVo(ChambreCreate):
    id: int

    categorie: Optional[CategorieVo]


class ChambreEdit(ChambreCreate):
    id: int


class ChambreWithoutAssociativeListVo(ChambreCreate):
    id: int


class  ChambreFilter(Filter):
    telephone: Optional[str]
    telephone__like: Optional[str]
    telephone__in: Optional[list[str]]
    address: Optional[str]
    address__like: Optional[str]
    address__in: Optional[list[str]]
    nbrLit: Optional[float]
    nbrLit__lt: Optional[float]
    nbrLit__gte: Optional[float]
    addedAt: Optional[datetime.datetime]
    addedAt__lt: Optional[datetime.datetime]
    addedAt__gte: Optional[datetime.datetime]
    createdAt: Optional[datetime.datetime]
    createdAt__lt: Optional[datetime.datetime]
    createdAt__gte: Optional[datetime.datetime]
    available: Optional[bool]
    order_by: list[str] = ["id"]


    class Constants(Filter.Constants):
        model = Chambre

