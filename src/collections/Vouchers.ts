import type { CollectionConfig } from "payload";

export const Vouchers: CollectionConfig = {
  slug: "vouchers",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "kode",
    group: "E-Commerce",
  },
  fields: [
    {
      name: "kode",
      type: "text",
      required: true,
      unique: true,
    },
    {
      type: "row",
      fields: [
        {
          name: "diskon_persen",
          type: "number",
          required: true,
        },
        {
          name: "min_belanja",
          type: "number",
          defaultValue: 0,
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "mulai",
          type: "date",
          admin: {
            date: {
              pickerAppearance: "dayAndTime",
            },
          },
        },
        {
          name: "berakhir",
          type: "date",
          admin: {
            date: {
              pickerAppearance: "dayAndTime",
            },
          },
        },
      ],
    },
  ],
  timestamps: true,
};
