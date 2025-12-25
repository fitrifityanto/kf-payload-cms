import type { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "nama",
    group: "E-Commerce",
  },
  fields: [
    {
      name: "nama",
      type: "text",
      required: true,
    },
    {
      name: "deskripsi",
      type: "textarea",
    },
    {
      type: "row", // Menampilkan dua field sejajar di Admin UI
      fields: [
        {
          name: "harga_normal",
          type: "number",
          required: true,
        },
        {
          name: "diskon_persen",
          type: "number",
        },
      ],
    },
    {
      name: "gambar",
      type: "text",
      label: "URL Gambar (Legacy)",
      admin: {
        description:
          "Data manual dari DB lama. Sembunyi jika field baru diisi.",
        condition: (data) => !data.gambar_media, // Sembunyi jika sudah ada gambar baru
      },
    },
    {
      name: "gambar_media",
      type: "upload",
      relationTo: "media",
      label: "Media Payload (Cloudinary)",
      admin: {
        description: "Gunakan ini untuk upload gambar baru ke Cloudinary",
      },
    },
  ],
  timestamps: true,
};
