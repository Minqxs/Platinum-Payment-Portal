using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PlatinumPaymentPortal_Core.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "SignatureImage",
                table: "AspNetUsers",
                type: "varbinary(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SignatureImageMimeType",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SignatureImage",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "SignatureImageMimeType",
                table: "AspNetUsers");
        }
    }
}
