FROM adoptopenjdk/openjdk11:jdk-11.0.11_9-alpine-slim

WORKDIR "/app"

COPY /target/notes-api-0.0.1-SNAPSHOT.jar notes-api-0.0.1-SNAPSHOT.jar

ENTRYPOINT exec java -DMYSQL_PASSWORD=$MYSQL_PASSWORD -jar notes-api-0.0.1-SNAPSHOT.jar