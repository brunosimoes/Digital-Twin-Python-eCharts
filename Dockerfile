# Copy microfrontend data and build it
FROM node:19-alpine as builder
WORKDIR /home/app
COPY ./config ./config
COPY ./microfrontend /home/app/microfrontend
WORKDIR /home/app/microfrontend
RUN yarn && mkdir -p /home/app/microservice/public
RUN yarn build && cp -rf ./public/*-dts.tgz /home/app/microservice/public

# Create production build
FROM python:3.7
WORKDIR /usr/app
COPY ./requirements.txt .
RUN pip install -r requirements.txt
COPY ./microservice ./microservice
COPY *.py .
COPY --from=builder /home/app/microservice/public ./microservice/public
RUN chmod a+x -Rf ./microservice/public
CMD ["python", "run.py"]