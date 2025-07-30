using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PlatinumPaymentPortal_Core.Migrations
{
    /// <inheritdoc />
    public partial class updatedEntities : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InvoiceFile_PaymentRequest_PaymentRequestId",
                table: "InvoiceFile");

            migrationBuilder.DropIndex(
                name: "IX_InvoiceFile_PaymentRequestId",
                table: "InvoiceFile");

            migrationBuilder.RenameColumn(
                name: "FilePath",
                table: "ProofOfPaymentFile",
                newName: "FileName");

            migrationBuilder.RenameColumn(
                name: "FilePath",
                table: "InvoiceFile",
                newName: "FileName");

            migrationBuilder.AddColumn<byte[]>(
                name: "Content",
                table: "ProofOfPaymentFile",
                type: "varbinary(max)",
                nullable: false,
                defaultValue: new byte[0]);

            migrationBuilder.AddColumn<string>(
                name: "InvoiceFileName",
                table: "PaymentRequest",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "PaymentRequest",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "ProofOfPaymentFileName",
                table: "PaymentRequest",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "PaymentRequestId",
                table: "InvoiceFile",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<byte[]>(
                name: "Content",
                table: "InvoiceFile",
                type: "varbinary(max)",
                nullable: false,
                defaultValue: new byte[0]);

            migrationBuilder.CreateIndex(
                name: "IX_InvoiceFile_PaymentRequestId",
                table: "InvoiceFile",
                column: "PaymentRequestId",
                unique: true,
                filter: "[PaymentRequestId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_InvoiceFile_PaymentRequest_PaymentRequestId",
                table: "InvoiceFile",
                column: "PaymentRequestId",
                principalTable: "PaymentRequest",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InvoiceFile_PaymentRequest_PaymentRequestId",
                table: "InvoiceFile");

            migrationBuilder.DropIndex(
                name: "IX_InvoiceFile_PaymentRequestId",
                table: "InvoiceFile");

            migrationBuilder.DropColumn(
                name: "Content",
                table: "ProofOfPaymentFile");

            migrationBuilder.DropColumn(
                name: "InvoiceFileName",
                table: "PaymentRequest");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "PaymentRequest");

            migrationBuilder.DropColumn(
                name: "ProofOfPaymentFileName",
                table: "PaymentRequest");

            migrationBuilder.DropColumn(
                name: "Content",
                table: "InvoiceFile");

            migrationBuilder.RenameColumn(
                name: "FileName",
                table: "ProofOfPaymentFile",
                newName: "FilePath");

            migrationBuilder.RenameColumn(
                name: "FileName",
                table: "InvoiceFile",
                newName: "FilePath");

            migrationBuilder.AlterColumn<int>(
                name: "PaymentRequestId",
                table: "InvoiceFile",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_InvoiceFile_PaymentRequestId",
                table: "InvoiceFile",
                column: "PaymentRequestId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_InvoiceFile_PaymentRequest_PaymentRequestId",
                table: "InvoiceFile",
                column: "PaymentRequestId",
                principalTable: "PaymentRequest",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
