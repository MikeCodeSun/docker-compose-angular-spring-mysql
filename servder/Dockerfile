FROM openjdk:20

ENV DB_NAME=compose \
    DB_USER=root \
    DB_PASSWORD=password \
    DB_HOST=localhost \
    DB_PORT=3306

WORKDIR /server

COPY /target/servder-0.0.1-SNAPSHOT.jar /server

EXPOSE 8080

CMD [ "java", "-jar" , "servder-0.0.1-SNAPSHOT.jar" ]