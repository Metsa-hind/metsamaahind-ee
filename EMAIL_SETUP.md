# Email Functionality Setup

## Overview
Your forms now send emails to `info@metsamaahind.ee` using PHP scripts and reCAPTCHA v3 protection.

## Files Created
- `public/api/contact.php` - Handles contact form submissions (Hero form)
- `public/api/upload.php` - Handles metsakava upload form submissions

## Deployment Instructions

### 1. Build and Upload Static Files
```bash
npm run build
```
Upload the contents of the `out/` folder to your web server.

### 2. Upload PHP Scripts
Upload these PHP files to your server:
- `public/api/contact.php` → `yoursite.com/api/contact.php`
- `public/api/upload.php` → `yoursite.com/api/upload.php`

### 3. Server Requirements
- PHP with `mail()` function enabled
- File upload permissions for metsakava files
- The upload script creates an `uploads/` directory for files

### 4. reCAPTCHA Configuration
The PHP scripts use your existing reCAPTCHA secret key:
`6Le21i8jAAAAAH0ntAd0h1ZPWeiCTYhAJBD-ClIi`

## Form Features

### Contact Form (Hero)
- Validates name and email (required)
- Validates email format
- reCAPTCHA v3 verification
- Sends email to `info@metsamaahind.ee`

### Upload Form (Metsakava)
- File upload support (PDF, DOC, DOCX, JPG, PNG)
- Max file size: 10MB
- Files saved to `uploads/` directory with unique names
- reCAPTCHA v3 verification
- Sends email with file information

## Testing
Forms will work on your live server with PHP support. They won't work on localhost unless you have PHP running locally.

## File Security
Uploaded files are stored in the `uploads/` directory. Consider adding an `.htaccess` file to prevent direct access:

```apache
# In uploads/.htaccess
Options -Indexes
<Files "*.php">
    Order allow,deny
    Deny from all
</Files>
```