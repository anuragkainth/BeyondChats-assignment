import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import axios from 'axios';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const websiteUrl: string | null = searchParams.get('url');

  if (!websiteUrl) {
    return NextResponse.json({ error: 'Missing URL parameter' }, { status: 400 });
  }

  try {
    // Fetch the website HTML using axios
    const response = await axios.get(websiteUrl);
    const html = response.data;

    // Load the HTML into cheerio for parsing
    const $ = cheerio.load(html);
    const description =
      $('meta[name="description"]').attr('content') ||
      $('meta[property="og:description"]').attr('content') ||
      '';

    return NextResponse.json({ description });
  } catch (error: unknown) {
    console.error('Error fetching metadata:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}