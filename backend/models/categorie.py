import datetime
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import relationship

from database import Base, engine


class Categorie(Base):
    __tablename__ = 'categorie'

    id = Column(Integer, primary_key=True, index=True)

    reference = Column(String, unique=True)
    createdAt = Column(DateTime, default=datetime.datetime.utcnow)

    chambre = relationship("Chambre", back_populates="categorie")


Base.metadata.create_all(bind=engine)
