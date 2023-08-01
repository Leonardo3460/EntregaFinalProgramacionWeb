PGDMP         &                {            farmacia_saas    15.3    15.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                        0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16398    farmacia_saas    DATABASE     �   CREATE DATABASE farmacia_saas WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Venezuela.1252';
    DROP DATABASE farmacia_saas;
                postgres    false            �            1259    16400 	   productos    TABLE     �  CREATE TABLE public.productos (
    id integer NOT NULL,
    nombre text NOT NULL,
    cantidad integer NOT NULL,
    clasificacion text NOT NULL,
    principio text,
    farma text,
    fechav date,
    ingresa text NOT NULL,
    proveedor text NOT NULL,
    lote integer NOT NULL,
    factura text NOT NULL,
    codigo numeric(12,0) NOT NULL,
    imagen text,
    fechaingreso date DEFAULT CURRENT_DATE,
    CONSTRAINT productos_fechav_check CHECK ((fechav > CURRENT_DATE))
);
    DROP TABLE public.productos;
       public         heap    postgres    false            �            1259    16399    productos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.productos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.productos_id_seq;
       public          postgres    false    215                       0    0    productos_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.productos_id_seq OWNED BY public.productos.id;
          public          postgres    false    214            e           2604    16403    productos id    DEFAULT     l   ALTER TABLE ONLY public.productos ALTER COLUMN id SET DEFAULT nextval('public.productos_id_seq'::regclass);
 ;   ALTER TABLE public.productos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            �          0    16400 	   productos 
   TABLE DATA           �   COPY public.productos (id, nombre, cantidad, clasificacion, principio, farma, fechav, ingresa, proveedor, lote, factura, codigo, imagen, fechaingreso) FROM stdin;
    public          postgres    false    215   �                  0    0    productos_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.productos_id_seq', 2, true);
          public          postgres    false    214            i           2606    16410    productos productos_nombre_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_nombre_key UNIQUE (nombre);
 H   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_nombre_key;
       public            postgres    false    215            k           2606    16408    productos productos_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_pkey;
       public            postgres    false    215            �     x����N�0�盧�#�؎c;cUT1		�����q�$�xF�>E^�R��:�\�ܟ�px�~?Y��������+�w������t�>�m����| ��ö���*B��O�b��ǽ�w�|I#H+?�f�=9��9ج�����@0!L/��m�y�6љ���'�9h��Y�L�M��hMe��1ˏ���Ҹ.剸�Qç�b�Wڹ`����O(r�k�����$�6�s�`�5��̚�T¤RI-;�)9�"����L���M�I     