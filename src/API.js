export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJkYmZmMjQwMS0xMzQ0LTQwOTctOWIxMi00Y2EwMzM1Nzk1NWEiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwNjY1MjE0OCwiZXhwIjoxNzA3MjU2OTQ4fQ.K-5EK_-oic1hWUmW7duUAtQ3KPQqRbTVMRTwjv4KtsQ";
// token expire after one year : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJkYmZmMjQwMS0xMzQ0LTQwOTctOWIxMi00Y2EwMzM1Nzk1NWEiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwNjY1MjI4MSwiZXhwIjoxNzM4MTg4MjgxfQ.MNDtfZUtw_85oC76Y9SGTsYZMTUzMXuCdoQ-6Bd6JIk
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};