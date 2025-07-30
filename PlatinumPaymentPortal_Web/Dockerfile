FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["PlatinumPaymentProtal_Web/PlatinumPaymentProtal_Web.csproj", "PlatinumPaymentProtal_Web/"]
COPY ["PlatinumPaymentPortal_Core/PlatinumPaymentPortal_Core.csproj", "PlatinumPaymentPortal_Core/"]
RUN dotnet restore "PlatinumPaymentProtal_Web/PlatinumPaymentProtal_Web.csproj"
COPY . .
WORKDIR "/src/PlatinumPaymentProtal_Web"
RUN dotnet build "PlatinumPaymentProtal_Web.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "PlatinumPaymentProtal_Web.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PlatinumPaymentProtal_Web.dll"]
