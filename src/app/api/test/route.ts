import { NextResponse } from 'next/server';
import { isValidImageHash, getBaseHash, getImageUrl } from '@/utils/imageHash';

export async function GET() {
  const testHash = 'bd_business';
  
  return NextResponse.json({
    hash: testHash,
    isValid: isValidImageHash(testHash),
    baseHash: getBaseHash(testHash),
    imagePath: getImageUrl(getBaseHash(testHash)),
    message: 'Test completed'
  });
} 