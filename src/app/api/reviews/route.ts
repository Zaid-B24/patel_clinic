// app/api/reviews/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = 'ChIJ1dq7v8uZ2zsRc98ltpOiFpM'; // Dr. Patel Hospital's Place ID
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(data.error_message || 'Failed to fetch reviews');
    }

    // Return only the reviews array
    return NextResponse.json(data.result.reviews || []);

  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}