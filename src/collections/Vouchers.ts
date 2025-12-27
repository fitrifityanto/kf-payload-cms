import type { CollectionConfig } from "payload";
import { revalidateTag } from "./revalidateHelper";

export const Vouchers: CollectionConfig = {
  slug: "vouchers",
  access: {
    // Publik/Viewer boleh baca
    read: ({ req: { user } }) => {
      if (user?.role === "admin" || user?.role === "viewer") return true;
      return false;
    },
    // Hanya admin yang bisa modifikasi
    create: ({ req: { user } }) => user?.role === "admin",
    update: ({ req: { user } }) => user?.role === "admin",
    delete: ({ req: { user } }) => user?.role === "admin",
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
  hooks: {
    afterChange: [
      ({ operation }) => {
        if (operation === "update" || operation === "create") {
          revalidateTag("vouchers");
        }
      },
    ],
  },
};
