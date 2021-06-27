FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /web
WORKDIR /web
COPY requirements.txt /web/
RUN pip install --upgrade pip && pip install -r requirements.txt
ADD . /web/