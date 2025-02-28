'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { z } from 'zod'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function SurveyForm() {
  const [result, setResult] = useState(null)

  // Define restricted countries
  const restrictedCountries = [
    'CHN',
    'PRK',
    'DZA',
    'EGY',
    'MAR',
    'NPL',
    'BGD',
    'BOL',
    'ECU',
  ]

  const countries = [
    // Crypto-friendly, high-income countries
    { name: 'United States', value: 'USA', priority: 'high' },
    { name: 'Canada', value: 'CAN', priority: 'high' },
    { name: 'England', value: 'GBR', priority: 'high' },
    { name: 'Germany', value: 'DEU', priority: 'high' },
    { name: 'France', value: 'FRA', priority: 'high' },
    { name: 'Singapore', value: 'SGP', priority: 'high' },
    { name: 'United Arab Emirates', value: 'ARE', priority: 'high' },
    { name: 'Switzerland', value: 'CHE', priority: 'high' },
    { name: 'Australia', value: 'AUS', priority: 'high' },
    { name: 'Japan', value: 'JPN', priority: 'high' },
    { name: 'South Korea', value: 'KOR', priority: 'high' },
    { name: 'Netherlands', value: 'NLD', priority: 'high' },
    { name: 'Malta', value: 'MLT', priority: 'high' },
    { name: 'Estonia', value: 'EST', priority: 'high' },
    { name: 'Portugal', value: 'PRT', priority: 'high' },
    { name: 'Denmark', value: 'DNK', priority: 'high' },
    { name: 'Sweden', value: 'SWE', priority: 'high' },
    { name: 'Norway', value: 'NOR', priority: 'high' },
    { name: 'Luxembourg', value: 'LUX', priority: 'high' },

    // Emerging Markets with High Crypto Adoption
    { name: 'Brazil', value: 'BRA', priority: 'high' },
    { name: 'India', value: 'IND', priority: 'high' },
    { name: 'Thailand', value: 'THA', priority: 'high' },
    { name: 'Nigeria', value: 'NGA', priority: 'high' },
    { name: 'Turkey', value: 'TUR', priority: 'high' },
    { name: 'Vietnam', value: 'VNM', priority: 'high' },
    { name: 'Philippines', value: 'PHL', priority: 'high' },
    { name: 'Indonesia', value: 'IDN', priority: 'high' },
    { name: 'Argentina', value: 'ARG', priority: 'high' },
    { name: 'Mexico', value: 'MEX', priority: 'high' },
    { name: 'South Africa', value: 'ZAF', priority: 'high' },
    { name: 'Kenya', value: 'KEN', priority: 'high' },
    { name: 'Colombia', value: 'COL', priority: 'high' },
    { name: 'Ukraine', value: 'UKR', priority: 'high' },

    // Countries with restrictions or low adoption
    { name: 'China', value: 'CHN', priority: 'low' },
    { name: 'North Korea', value: 'PRK', priority: 'low' },
    { name: 'Algeria', value: 'DZA', priority: 'low' },
    { name: 'Egypt', value: 'EGY', priority: 'low' },
    { name: 'Morocco', value: 'MAR', priority: 'low' },
    { name: 'Nepal', value: 'NPL', priority: 'low' },
    { name: 'Bangladesh', value: 'BGD', priority: 'low' },
    { name: 'Bolivia', value: 'BOL', priority: 'low' },
    { name: 'Ecuador', value: 'ECU', priority: 'low' },

    // Other countries
    { name: 'Other', value: 'OTHER', priority: 'medium' },
  ]

  const formSchema = z.object({
    name: z.string().min(2, 'Please enter your name.'),
    email: z.string().email('Please enter a valid email address.'),
    age: z.string().min(1, 'Please select your age.'),
    gender: z.string().min(1, 'Please select your gender.'),
    country: z.string().min(1, 'Please select your country.'),
    cryptoExperience: z.string().min(1, 'Please select your experience level.'),
    cryptoAssets: z
      .array(z.string())
      .min(1, 'Please select at least one crypto asset.'),
    aiTokens: z
      .string()
      .min(1, 'Please select your AI token investment status.'),
    investmentPhilosophy: z
      .string()
      .min(1, 'Please select your investment philosophy.'),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      age: '',
      gender: '',
      country: '',
      cryptoExperience: '',
      cryptoAssets: [],
      aiTokens: '',
      investmentPhilosophy: '',
    },
  })

  async function onSubmit(values) {
    // Qualification logic based on all criteria
    const isQualified =
      values.age !== 'Under 18' &&
      values.age !== '65+' &&
      !restrictedCountries.includes(values.country) &&
      values.cryptoExperience !== 'Less than 6 months' &&
      values.cryptoAssets.length > 0 &&
      values.cryptoAssets.some(
        (asset) => asset !== "I don't hold any crypto"
      ) &&
      values.aiTokens !== "No, I don't see AI as a good investment" &&
      values.investmentPhilosophy !==
        'I invest conservatively and avoid volatility'

    // // Add priority logic if needed
    // const highPriority =
    //   (values.age === '18-24' ||
    //     values.age === '25-34' ||
    //     values.age === '35-44') &&
    //   (values.cryptoExperience === '2-5 years' ||
    //     values.cryptoExperience === 'More than 5 years') &&
    //   values.cryptoAssets.some((asset) =>
    //     ['Bitcoin (BTC)', 'Ethereum (ETH)', 'AI-related tokens'].includes(asset)
    //   ) &&
    //   values.aiTokens === 'Yes, I actively invest in AI tokens' &&
    //   (values.investmentPhilosophy ===
    //     'I take high risks for high potential rewards' ||
    //     values.investmentPhilosophy === 'I prefer balanced risks and safe bets')

    try {
      const payload = { ...values, isQualified }
      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Success:', data)

        setResult(isQualified ? 'qualified' : 'disqualified')
      } else {
        console.error('Submission failed')
      }
    } catch (error) {
      console.log('Error submitting form:', error)
    }
  }

  if (result) {
    return (
      <div className='mx-6 py-32'>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>
              {result === 'qualified' ? 'Congratulations!' : 'Thank You'}
            </h2>
          </CardHeader>
          <CardContent>
            {result === 'qualified' ? (
              <p>
                You've been selected for an interview! We'll contact you
                shortly.
              </p>
            ) : (
              <p>
                Thank you for your application. Unfortunately, you don't meet
                our current requirements.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className='mx-6 py-32'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <Card>
            <CardHeader className='font-semibold'>
              Contact Information
            </CardHeader>
            <CardContent className='space-y-4'>
              <FormField
                name='name'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your full name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='email'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter your email address'
                        type='email'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='font-semibold'>
              1.1 Age & Location (Demographic Skew)
            </CardHeader>
            <CardContent className='space-y-4'>
              <FormField
                name='age'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How old are you?</FormLabel>
                    <FormControl>
                      <div className='flex flex-col space-y-1'>
                        {[
                          'Under 18',
                          '18-24',
                          '25-34',
                          '35-44',
                          '45-54',
                          '55-64',
                          '65+',
                        ].map((option) => (
                          <FormItem
                            key={option}
                            className='flex items-center space-x-3 space-y-0'
                          >
                            <FormControl>
                              <Checkbox
                                value={option}
                                checked={field.value === option}
                                onCheckedChange={() => {
                                  field.onChange(option)
                                }}
                              />
                            </FormControl>
                            <FormLabel className='font-normal'>
                              {option}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </div>
                    </FormControl>
                    {form.formState.errors.age && (
                      <p className='text-red-500 text-sm'>
                        {form.formState.errors.age.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                name='gender'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your gender?</FormLabel>
                    <FormControl>
                      <div className='flex flex-col space-y-1'>
                        {[
                          'Male',
                          'Female',
                          'Non-binary / Prefer not to say',
                        ].map((option) => (
                          <FormItem
                            key={option}
                            className='flex items-center space-x-3 space-y-0'
                          >
                            <FormControl>
                              <Checkbox
                                value={option}
                                checked={field.value === option}
                                onCheckedChange={() => {
                                  field.onChange(option)
                                }}
                              />
                            </FormControl>
                            <FormLabel className='font-normal'>
                              {option}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </div>
                    </FormControl>
                    {form.formState.errors.gender && (
                      <p className='text-red-500 text-sm'>
                        {form.formState.errors.gender.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                name='country'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Where do you currently live?</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select your country' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country.value} value={country.value}>
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {form.formState.errors.country && (
                      <p className='text-red-500 text-sm'>
                        {form.formState.errors.country.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='font-semibold'>
              1.2 Crypto Investment Experience
            </CardHeader>
            <CardContent className='space-y-4'>
              <FormField
                name='cryptoExperience'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      How long have you been investing in cryptocurrency?
                    </FormLabel>
                    <FormControl>
                      <div className='flex flex-col space-y-1'>
                        {[
                          'Less than 6 months',
                          '6 months - 2 years',
                          '2-5 years',
                          'More than 5 years',
                        ].map((option) => (
                          <FormItem
                            key={option}
                            className='flex items-center space-x-3 space-y-0'
                          >
                            <FormControl>
                              <Checkbox
                                value={option}
                                checked={field.value === option}
                                onCheckedChange={() => {
                                  field.onChange(option)
                                }}
                              />
                            </FormControl>
                            <FormLabel className='font-normal'>
                              {option}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </div>
                    </FormControl>
                    {form.formState.errors.cryptoExperience && (
                      <p className='text-red-500 text-sm'>
                        {form.formState.errors.cryptoExperience.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                name='cryptoAssets'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Which types of crypto assets do you own? (Select all that
                      apply)
                    </FormLabel>
                    <FormControl>
                      <div className='flex flex-col space-y-1'>
                        {[
                          'Bitcoin (BTC)',
                          'Ethereum (ETH)',
                          'AI-related tokens',
                          'Gaming/NFT tokens',
                          'DeFi tokens',
                          'Layer 1 tokens',
                          'Stablecoins only',
                          "I don't hold any crypto",
                        ].map((option) => (
                          <FormItem
                            key={option}
                            className='flex items-center space-x-3 space-y-0'
                          >
                            <FormControl>
                              <Checkbox
                                value={option}
                                checked={field.value.includes(option)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    // Add the value to the array
                                    field.onChange([...field.value, option])
                                  } else {
                                    // Remove the value from the array
                                    field.onChange(
                                      field.value.filter(
                                        (val) => val !== option
                                      )
                                    )
                                  }
                                }}
                              />
                            </FormControl>
                            <FormLabel className='font-normal'>
                              {option}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </div>
                    </FormControl>
                    {form.formState.errors.cryptoAssets && (
                      <p className='text-red-500 text-sm'>
                        {form.formState.errors.cryptoAssets.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='font-semibold'>
              1.3 AI & Tech Exposure
            </CardHeader>
            <CardContent className='space-y-4'>
              <FormField
                name='aiTokens'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Have you ever invested in AI-related tokens?
                    </FormLabel>
                    <FormControl>
                      <div className='flex flex-col space-y-1'>
                        {[
                          'Yes, I actively invest in AI tokens',
                          'No, but I am interested in AI tokens',
                          "No, I don't see AI as a good investment",
                        ].map((option) => (
                          <FormItem
                            key={option}
                            className='flex items-center space-x-3 space-y-0'
                          >
                            <FormControl>
                              <Checkbox
                                value={option}
                                checked={field.value === option}
                                onCheckedChange={() => {
                                  field.onChange(option)
                                }}
                              />
                            </FormControl>
                            <FormLabel className='font-normal'>
                              {option}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </div>
                    </FormControl>
                    {form.formState.errors.aiTokens && (
                      <p className='text-red-500 text-sm'>
                        {form.formState.errors.aiTokens.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='font-semibold'>
              1.4 Investment Behavior & Risk Appetite
            </CardHeader>
            <CardContent className='space-y-4'>
              <FormField
                name='investmentPhilosophy'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Which best describes your investment philosophy?
                    </FormLabel>
                    <FormControl>
                      <div className='flex flex-col space-y-1'>
                        {[
                          'I take high risks for high potential rewards',
                          'I prefer balanced risks and safe bets',
                          'I invest conservatively and avoid volatility',
                        ].map((option) => (
                          <FormItem
                            key={option}
                            className='flex items-center space-x-3 space-y-0'
                          >
                            <FormControl>
                              <Checkbox
                                value={option}
                                checked={field.value === option}
                                onCheckedChange={() => {
                                  field.onChange(option)
                                }}
                              />
                            </FormControl>
                            <FormLabel className='font-normal'>
                              {option}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </div>
                    </FormControl>
                    {form.formState.errors.investmentPhilosophy && (
                      <p className='text-red-500 text-sm'>
                        {form.formState.errors.investmentPhilosophy.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <CardFooter className='flex justify-end'>
            <Button type='submit'>Submit</Button>
          </CardFooter>
        </form>
      </Form>
    </div>
  )
}
