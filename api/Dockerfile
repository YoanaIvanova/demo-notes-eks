FROM adoptopenjdk/openjdk11:jdk-11.0.11_9-alpine-slim

WORKDIR "/app"

COPY /target/notes-api-0.0.1-SNAPSHOT.jar notes-api-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "/app/notes-api-0.0.1-SNAPSHOT.jar"]