FROM ubuntu:20.04

RUN apt-get update && apt-get install -y --no-install-recommends \
    python3.8 \
    python3-pip 

WORKDIR /api
 

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000