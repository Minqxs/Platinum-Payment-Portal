using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PlatinumPaymentPortal_Core.Migrations
{
    /// <inheritdoc />
    public partial class updatedEntities3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PaymentRequest");

            migrationBuilder.DropTable(
                name: "Department");

            migrationBuilder.DropTable(
                name: "Managers");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Department",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NameOfDepartment = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Department", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Managers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SignatureFilePath = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Managers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PaymentRequest",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DepartmentId = table.Column<int>(type: "int", nullable: false),
                    ManagerId1 = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SubmittedById1 = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CoverSheetPdfPath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InvoiceDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    InvoiceFile = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    InvoiceFileName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    IsSignedOff = table.Column<bool>(type: "bit", nullable: false),
                    ManagerId = table.Column<int>(type: "int", nullable: false),
                    PaymentDateRequested = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PaymentDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PaymentRicpientName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProofOfPaymentFile = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    ProofOfPaymentFileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RicpientBankDetails = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SignedOffAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    SubmittedById = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentRequest", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PaymentRequest_Department_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Department",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PaymentRequest_Managers_ManagerId",
                        column: x => x.ManagerId,
                        principalTable: "Managers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PaymentRequest_Users_ManagerId1",
                        column: x => x.ManagerId1,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PaymentRequest_Users_SubmittedById1",
                        column: x => x.SubmittedById1,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PaymentRequest_DepartmentId",
                table: "PaymentRequest",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_PaymentRequest_ManagerId",
                table: "PaymentRequest",
                column: "ManagerId");

            migrationBuilder.CreateIndex(
                name: "IX_PaymentRequest_ManagerId1",
                table: "PaymentRequest",
                column: "ManagerId1");

            migrationBuilder.CreateIndex(
                name: "IX_PaymentRequest_SubmittedById1",
                table: "PaymentRequest",
                column: "SubmittedById1");
        }
    }
}
