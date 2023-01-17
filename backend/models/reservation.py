import datetime
from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean, ForeignKey
from sqlalchemy.orm import relationship

from models.client import Client
from models.chambre import Chambre

from database import Base, engine


class Reservation(Base):
    __tablename__ = 'reservation'

    id = Column(Integer, primary_key=True, index=True)

    reference = Column(String, unique=True)
    status = Column(String)
    dayNumber = Column(Integer)
    dateDebut = Column(DateTime)
    dateFin = Column(DateTime)
    valid = Column(Boolean, default=False)

    client_id = Column(Integer, ForeignKey(Client.id))
    client = relationship("Client", back_populates="reservation")

    chambre_id = Column(Integer, ForeignKey(Chambre.id))
    chambre = relationship("Chambre", back_populates="reservation")



Base.metadata.create_all(bind=engine)
