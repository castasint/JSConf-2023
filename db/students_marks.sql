-- Table: public.student_marks

-- DROP TABLE IF EXISTS public.student_marks;

CREATE TABLE IF NOT EXISTS public.student_marks
(
    id integer NOT NULL DEFAULT nextval('student_marks_id_seq'::regclass),
    student_id integer,
    subject character varying(50) COLLATE pg_catalog."default",
    mark integer,
    CONSTRAINT student_marks_pkey PRIMARY KEY (id),
    CONSTRAINT student_marks_student_id_fkey FOREIGN KEY (student_id)
        REFERENCES public.students (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.student_marks
    OWNER to postgres;