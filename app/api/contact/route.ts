import { NextResponse } from 'next/server';

export async function POST(request:Request) {
  try {
    const body = await request.json();
    const required = ['name','email','phone','projectType','message'];
    if (required.some(k => !String(body[k] || '').trim())) return NextResponse.json({error:'Please complete all required fields.'},{status:400});
    const key = process.env.RESEND_API_KEY;
    if (!key) return NextResponse.json({error:'Email delivery is not configured.'},{status:503});
    const to = process.env.CONTACT_TO_EMAIL || 'justin@odysseyengineeringgrp.com';
    const from = process.env.CONTACT_FROM_EMAIL || 'Odyssey Website <onboarding@resend.dev>';
    const resp = await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({from,to:[to],reply_to:body.email,subject:`Website inquiry: ${body.projectType}`,text:`Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone}\nProject type: ${body.projectType}\n\n${body.message}`})});
    if(!resp.ok) return NextResponse.json({error:'Email provider rejected the message.'},{status:502});
    return NextResponse.json({ok:true});
  } catch { return NextResponse.json({error:'Invalid request.'},{status:400}); }
}
