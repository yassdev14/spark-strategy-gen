DROP POLICY IF EXISTS "Anyone can submit a contact request" ON public.contact_submissions;

CREATE POLICY "Anyone can submit a valid contact request"
  ON public.contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(trim(name)) BETWEEN 1 AND 100
    AND char_length(trim(email)) BETWEEN 3 AND 255
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND char_length(trim(subject)) BETWEEN 1 AND 200
    AND char_length(trim(message)) BETWEEN 10 AND 2000
  );