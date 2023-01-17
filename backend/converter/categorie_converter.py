import datetime
from converter.base_model import BaseModelConfig
from typing import Optional



class CategorieCreate(BaseModelConfig):
    reference: str


class CategorieVo(CategorieCreate):
    id: int



class CategorieEdit(CategorieCreate):
    id: int


class CategorieWithoutAssociativeListVo(CategorieCreate):
    id: int


