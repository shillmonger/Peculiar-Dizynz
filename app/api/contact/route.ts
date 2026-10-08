import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Prevent user-submitted content from breaking/injecting HTML into the email
function escapeHtml(value: string = "") {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      message,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Escape all user-provided content
    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const fullName = `${safeFirstName} ${safeLastName}`;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "465"),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || "Peculiar Dizynz <peculiarchigaemezu@gmail.com>",
      to: "peculiarchigaemezu@gmail.com",
      replyTo: email,
      subject: `New message from ${fullName}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>New Contact Message</title>
</head>

<body
  style="
    margin: 0;
    padding: 0;
    background-color: #f8f3ef;
    font-family: Georgia, 'Times New Roman', serif;
    color: #351200;
  "
>

  <!-- Main wrapper -->
  <table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
    style="
      background-color: #f8f3ef;
      padding: 24px 12px;
    "
  >
    <tr>
      <td align="center">

        <!-- Email container -->
        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            max-width: 560px;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #eadbd2;
          "
        >

          <!-- ================================= -->
          <!-- HEADER -->
          <!-- ================================= -->

          <tr>
            <td
              style="
                background-color: #471700;
                padding: 24px 28px;
              "
            >

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
              >
                <tr>

                  <!-- Brand -->
                  <td align="left">

                    <div
                      style="
                        color: #e8c9b8;
                        font-size: 11px;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                        margin-bottom: 6px;
                      "
                    >
                      PECULIAR DIZYNZ
                    </div>

                    <div
                      style="
                        color: #ffffff;
                        font-size: 22px;
                        line-height: 1.2;
                        font-weight: normal;
                      "
                    >
                      New Message
                    </div>

                  </td>

                  <!-- Small accent -->
                  <td
                    align="right"
                    valign="middle"
                  >
                    <div
                      style="
                        width: 38px;
                        height: 38px;
                        line-height: 38px;
                        text-align: center;
                        border-radius: 50%;
                        background-color: #6b2b0c;
                        color: #f3d8c8;
                        font-size: 17px;
                      "
                    >
                      ✦
                    </div>
                  </td>

                </tr>
              </table>

            </td>
          </tr>


          <!-- ================================= -->
          <!-- CONTENT -->
          <!-- ================================= -->

          <tr>
            <td
              style="
                padding: 32px 28px;
              "
            >

              <!-- Sender Information -->
              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  margin-bottom: 24px;
                "
              >
                <tr>
                  <td>
                    <div
                      style="
                        color: #471700;
                        font-size: 13px;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        margin-bottom: 12px;
                        font-weight: bold;
                      "
                    >
                      From
                    </div>

                    <div
                      style="
                        background-color: #fdf8f3;
                        border: 1px solid #eadbd2;
                        border-radius: 8px;
                        padding: 16px;
                      "
                    >
                      <div
                        style="
                          color: #351200;
                          font-size: 16px;
                          margin-bottom: 8px;
                        "
                      >
                        ${fullName}
                      </div>
                      <div
                        style="
                          color: #6b5a4f;
                          font-size: 14px;
                          margin-bottom: 4px;
                        "
                      >
                        ${safeEmail}
                      </div>
                      <div
                        style="
                          color: #6b5a4f;
                          font-size: 14px;
                        "
                      >
                        ${safePhone}
                      </div>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
              >
                <tr>
                  <td>
                    <div
                      style="
                        color: #471700;
                        font-size: 13px;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        margin-bottom: 12px;
                        font-weight: bold;
                      "
                    >
                      Message
                    </div>

                    <div
                      style="
                        background-color: #fdf8f3;
                        border: 1px solid #eadbd2;
                        border-radius: 8px;
                        padding: 16px;
                        color: #351200;
                        font-size: 15px;
                        line-height: 1.7;
                      "
                    >
                      ${safeMessage}
                    </div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>


          <!-- ================================= -->
          <!-- FOOTER -->
          <!-- ================================= -->

          <tr>
            <td
              style="
                background-color: #351200;
                padding: 24px 28px;
                text-align: center;
              "
            >
              <div
                style="
                  color: #e8c9b8;
                  font-size: 12px;
                  letter-spacing: 1px;
                  margin-bottom: 6px;
                "
              >
                PECULIAR DIZYNZ
              </div>
              <div
                style="
                  color: #b8a096;
                  font-size: 11px;
                "
              >
                Where Creativity Meets Strategy
              </div>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
