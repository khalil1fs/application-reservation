import datetime
from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean
from sqlalchemy.orm import relationship

from database import Base, engine


class Client(Base):
    __tablename__ = 'client'

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String)
    lastName = Column(String)
    cin = Column(String, unique=True)
    phone = Column(String)
    age = Column(Float)
    birthDate = Column(DateTime)
    createdAt = Column(DateTime, default=datetime.datetime.utcnow)
    valid = Column(Boolean, default=False)

    reservation = relationship("Reservation", back_populates="client")


Base.metadata.create_all(bind=engine)
