FROM maven:3.6.3-openjdk-11-slim as builder

WORKDIR /app
COPY pom.xml .

COPY src/ /app/src/
RUN mvn install

FROM adoptopenjdk/openjdk11:jdk-11.0.11_9-alpine-slim

COPY --from=builder /app/target/notes-api-0.0.1-SNAPSHOT.jar /notes-api-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "/notes-api-0.0.1-SNAPSHOT.jar"]