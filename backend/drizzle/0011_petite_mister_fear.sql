ALTER TABLE `attachment` MODIFY COLUMN `upload_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `chat_message` MODIFY COLUMN `created_at` datetime NOT NULL DEFAULT '2025-01-02 18:54:05.046';