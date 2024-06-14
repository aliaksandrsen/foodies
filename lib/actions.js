'use server';

import { redirect } from 'next/navigation';

import { saveMeal } from '@/lib/meals';

export async function shareMeal(fordata) {
  const meal = {
    title: fordata.get('title'),
    summary: fordata.get('summary'),
    instructions: fordata.get('instructions'),
    image: fordata.get('image'),
    creator: fordata.get('name'),
    creator_email: fordata.get('email'),
  };

  await saveMeal(meal);

  redirect('/meals');
}
