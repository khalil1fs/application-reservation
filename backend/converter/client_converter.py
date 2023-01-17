import datetime
from converter.base_model import BaseModelConfig
from typing import Optional

from fastapi_filter.contrib.sqlalchemy import Filter

from models.client import Client
from fastapi_filter.contrib.sqlalchemy import Filter


class ClientCreate(BaseModelConfig):
    name: Optional[str]
    lastName: Optional[str]
    cin: str
    phone: Optional[str]
    age: Optional[float]
    birthDate: Optional[datetime.datetime]
    valid: Optional[bool]


class ClientVo(ClientCreate):
    id: int



class ClientEdit(ClientCreate):
    id: int


class ClientWithoutAssociativeListVo(ClientCreate):
    id: int


class  ClientFilter(Filter):
    name: Optional[str]
    name__like: Optional[str]
    name__in: Optional[list[str]]
    lastName: Optional[str]
    lastName__like: Optional[str]
    lastName__in: Optional[list[str]]
    cin: Optional[str]
    cin__like: Optional[str]
    cin__in: Optional[list[str]]
    phone: Optional[str]
    phone__like: Optional[str]
    phone__in: Optional[list[str]]
    age: Optional[float]
    age__lt: Optional[float]
    age__gte: Optional[float]
    birthDate: Optional[datetime.datetime]
    birthDate__lt: Optional[datetime.datetime]
    birthDate__gte: Optional[datetime.datetime]
    createdAt: Optional[datetime.datetime]
    createdAt__lt: Optional[datetime.datetime]
    createdAt__gte: Optional[datetime.datetime]
    valid: Optional[bool]
    order_by: list[str] = ["id"]


    class Constants(Filter.Constants):
        model = Client

