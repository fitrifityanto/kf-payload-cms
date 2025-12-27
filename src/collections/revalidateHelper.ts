// src/collections/revalidateHelper.ts

export const revalidateTag = async (tag: string) => {
  try {
    const frontendUrl =
      process.env.PUBLIC_FRONTEND_URL || "http://localhost:3001";
    const secret = process.env.REVALIDATE_SECRET;

    if (!secret) {
      console.error("❌ REVALIDATE_SECRET is missing in .env");
      return;
    }

    const url = `${frontendUrl}/api/revalidate?tag=${tag}&secret=${secret}`;

    const res = await fetch(url);
    const result = await res.json();

    if (result.revalidated) {
      if (process.env.NODE_ENV !== "production") {
        console.log(`✅ Next.js Cache Revalidated for tag: ${tag}`);
      }
    } else {
      console.warn(
        `⚠️ Revalidation failed for tag: ${tag}. Message: ${result.message}`,
      );
    }
  } catch (err) {
    console.error(`❌ Revalidation request failed for tag: ${tag}`);
  }
};
