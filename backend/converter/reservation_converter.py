import datetime
from converter.base_model import BaseModelConfig
from typing import Optional

from fastapi_filter.contrib.sqlalchemy import Filter

from models.reservation import Reservation
from converter.client_converter import ClientVo
from converter.chambre_converter import ChambreVo
from fastapi_filter.contrib.sqlalchemy import Filter


class ReservationCreate(BaseModelConfig):
    reference: str
    status: Optional[str]
    dayNumber: Optional[int]
    dateDebut: Optional[datetime.datetime]
    dateFin: Optional[datetime.datetime]
    valid: Optional[bool]

    client_id: Optional[int]
    chambre_id: Optional[int]

class ReservationVo(ReservationCreate):
    id: int

    client: Optional[ClientVo]
    chambre: Optional[ChambreVo]


class ReservationEdit(ReservationCreate):
    id: int


class ReservationWithoutAssociativeListVo(ReservationCreate):
    id: int


class  ReservationFilter(Filter):
    reference: Optional[str]
    reference__like: Optional[str]
    reference__in: Optional[list[str]]
    status: Optional[str]
    status__like: Optional[str]
    status__in: Optional[list[str]]
    dayNumber: Optional[float]
    dayNumber__lt: Optional[float]
    dayNumber__gte: Optional[float]
    dateDebut: Optional[datetime.datetime]
    dateDebut__lt: Optional[datetime.datetime]
    dateDebut__gte: Optional[datetime.datetime]
    dateFin: Optional[datetime.datetime]
    dateFin__lt: Optional[datetime.datetime]
    dateFin__gte: Optional[datetime.datetime]
    valid: Optional[bool]
    order_by: list[str] = ["id"]


    class Constants(Filter.Constants):
        model = Reservation

