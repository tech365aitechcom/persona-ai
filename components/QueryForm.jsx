import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

const QueryForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    useCase: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    try {
      const response = await fetch('/api/useCase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Success:', data)
        toast.success('Use Case submitted successfully!')
        setFormData({ name: '', email: '', contact: '', useCase: '' })
        onClose()
      } else {
        console.error('Submission failed')
      }
    } catch (error) {
      console.log('Error submitting form:', error)
    }
  }

  return (
    <div className='w-full max-w-md mx-auto'>
      <div>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='space-y-2'>
            <Label htmlFor='name'>Full Name</Label>
            <Input
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your name'
              required
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='email'>Email Address</Label>
            <Input
              id='email'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              required
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='contact'>Contact Number</Label>
            <Input
              id='contact'
              name='contact'
              type='tel'
              value={formData.contact}
              onChange={handleChange}
              placeholder='Enter your phone number'
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='useCase'>Write Your Use Case</Label>
            <Textarea
              id='useCase'
              name='useCase'
              value={formData.useCase}
              onChange={handleChange}
              placeholder='What would you like to know?'
              rows={4}
              required
            />
          </div>

          <Button
            type='submit'
            className='w-full bg-yellow-300 text-black hover:bg-yellow-400'
          >
            Submit
            <ArrowRight className='ml-2 h-4 w-4' />
          </Button>
        </form>
      </div>
    </div>
  )
}

export default QueryForm
