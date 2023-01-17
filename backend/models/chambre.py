import datetime
from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean, ForeignKey
from sqlalchemy.orm import relationship

from models.categorie import Categorie

from database import Base, engine


class Chambre(Base):
    __tablename__ = 'chambre'

    id = Column(Integer, primary_key=True, index=True)

    telephone = Column(String)
    address = Column(String)
    nbrLit = Column(Integer)
    addedAt = Column(DateTime)
    createdAt = Column(DateTime, default=datetime.datetime.utcnow)
    available = Column(Boolean, default=False)

    categorie_id = Column(Integer, ForeignKey(Categorie.id))
    categorie = relationship("Categorie", back_populates="chambre")

    reservation = relationship("Reservation", back_populates="chambre")


Base.metadata.create_all(bind=engine)
