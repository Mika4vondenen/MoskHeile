/*
  # Add Contact Form Extended Fields

  1. Changes
    - Add `kundentyp` column (text) - Customer type: Privatperson or Unternehmen
    - Add `vorname` column (text, nullable) - First name for Privatperson
    - Add `nachname` column (text, nullable) - Last name for Privatperson
    - Add `ansprechpartner` column (text, nullable) - Contact person for Unternehmen
    - Add `unternehmensname` column (text, nullable) - Company name for Unternehmen
    - Add `telefonnummer` column (text, nullable) - Phone number (German field)

  2. Notes
    - All new fields are nullable to maintain backwards compatibility
    - No existing fields are modified or removed
    - kundentyp defaults to 'Privatperson' for existing records
*/

-- Add kundentyp column
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'kundentyp'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN kundentyp text DEFAULT 'Privatperson';
  END IF;
END $$;

-- Add vorname column
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'vorname'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN vorname text;
  END IF;
END $$;

-- Add nachname column
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'nachname'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN nachname text;
  END IF;
END $$;

-- Add ansprechpartner column
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'ansprechpartner'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN ansprechpartner text;
  END IF;
END $$;

-- Add unternehmensname column
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'unternehmensname'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN unternehmensname text;
  END IF;
END $$;

-- Add telefonnummer column
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'telefonnummer'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN telefonnummer text;
  END IF;
END $$;