using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PlatinumPaymentPortal_Core.Migrations
{
    /// <inheritdoc />
    public partial class updatedEntities1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "InvoiceFile");

            migrationBuilder.DropTable(
                name: "ProofOfPaymentFile");

            migrationBuilder.RenameColumn(
                name: "FullName",
                table: "Users",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "Department",
                table: "Users",
                newName: "FirstName");

            migrationBuilder.RenameColumn(
                name: "PayeeName",
                table: "PaymentRequest",
                newName: "PaymentRicpientName");

            migrationBuilder.AlterColumn<string>(
                name: "InvoiceFileName",
                table: "PaymentRequest",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DepartmentId",
                table: "PaymentRequest",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<byte[]>(
                name: "InvoiceFile",
                table: "PaymentRequest",
                type: "varbinary(max)",
                nullable: false,
                defaultValue: new byte[0]);

            migrationBuilder.AddColumn<byte[]>(
                name: "ProofOfPaymentFile",
                table: "PaymentRequest",
                type: "varbinary(max)",
                nullable: true);

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

            migrationBuilder.CreateIndex(
                name: "IX_PaymentRequest_DepartmentId",
                table: "PaymentRequest",
                column: "DepartmentId");

            migrationBuilder.AddForeignKey(
                name: "FK_PaymentRequest_Department_DepartmentId",
                table: "PaymentRequest",
                column: "DepartmentId",
                principalTable: "Department",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PaymentRequest_Department_DepartmentId",
                table: "PaymentRequest");

            migrationBuilder.DropTable(
                name: "Department");

            migrationBuilder.DropIndex(
                name: "IX_PaymentRequest_DepartmentId",
                table: "PaymentRequest");

            migrationBuilder.DropColumn(
                name: "DepartmentId",
                table: "PaymentRequest");

            migrationBuilder.DropColumn(
                name: "InvoiceFile",
                table: "PaymentRequest");

            migrationBuilder.DropColumn(
                name: "ProofOfPaymentFile",
                table: "PaymentRequest");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Users",
                newName: "FullName");

            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "Users",
                newName: "Department");

            migrationBuilder.RenameColumn(
                name: "PaymentRicpientName",
                table: "PaymentRequest",
                newName: "PayeeName");

            migrationBuilder.AlterColumn<string>(
                name: "InvoiceFileName",
                table: "PaymentRequest",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateTable(
                name: "InvoiceFile",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PaymentRequestId = table.Column<int>(type: "int", nullable: true),
                    Content = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InvoiceFile", x => x.Id);
                    table.ForeignKey(
                        name: "FK_InvoiceFile_PaymentRequest_PaymentRequestId",
                        column: x => x.PaymentRequestId,
                        principalTable: "PaymentRequest",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ProofOfPaymentFile",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PaymentRequestId = table.Column<int>(type: "int", nullable: false),
                    Content = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProofOfPaymentFile", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProofOfPaymentFile_PaymentRequest_PaymentRequestId",
                        column: x => x.PaymentRequestId,
                        principalTable: "PaymentRequest",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_InvoiceFile_PaymentRequestId",
                table: "InvoiceFile",
                column: "PaymentRequestId",
                unique: true,
                filter: "[PaymentRequestId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_ProofOfPaymentFile_PaymentRequestId",
                table: "ProofOfPaymentFile",
                column: "PaymentRequestId",
                unique: true);
        }
    }
}
