from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi_pagination import add_pagination
from api import reservation_api, chambre_api, categorie_api, client_api


app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

origins = [
    'http://localhost:4200',
    'http://localhost:3000',
    'http://localhost',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.on_event("startup")
async def startup() -> None:
    print('Application start...')


@app.on_event("shutdown")
async def startup() -> None:
    print('Shutdown...')


def configure_routing():
    app.include_router(reservation_api.router)
    app.include_router(chambre_api.router)
    app.include_router(categorie_api.router)
    app.include_router(client_api.router)


configure_routing()
add_pagination(app)

