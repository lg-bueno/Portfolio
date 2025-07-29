import { NextResponse } from 'next/server';
import { isValidImageHash, getBaseHash, getImageUrl } from '@/utils/imageHash';

export async function GET() {
  const testHashes = ['cs_100', 'htb_academician', 'bd_business'];
  
  const results = testHashes.map(hash => ({
    hash,
    isValid: isValidImageHash(hash),
    baseHash: getBaseHash(hash),
    imagePath: getImageUrl(getBaseHash(hash)),
  }));
  
  return NextResponse.json({
    results,
    message: 'Debug completed'
  });
} 