'use server';

import { redirect } from 'next/navigation';

import { saveMeal } from '@/lib/meals';

function isInvalidText(text) {
  return !text || text.trim() === '';
}

export async function shareMeal(fordata) {
  const meal = {
    title: fordata.get('title'),
    summary: fordata.get('summary'),
    instructions: fordata.get('instructions'),
    image: fordata.get('image'),
    creator: fordata.get('name'),
    creator_email: fordata.get('email'),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    throw new Error('Invalid input');
  }

  await saveMeal(meal);

  redirect('/meals');
}
