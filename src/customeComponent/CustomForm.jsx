import { Button } from '@/components/ui/button';
import { SheetClose } from '@/components/ui/sheet';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { useDispatch } from 'react-redux';
import { updateCategory } from '@/features/widgetSlice';

export default function CustomForm({onClose}) {

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    name: '',
    category: '', // Add category to state
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCategoryChange = (value) => {
    setFormData({
      ...formData,
      category: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  Validate form data
  if (!formData.name || !formData.category || !formData.description) {
    toast({
      title: "Validation Error",
      description: "All fields are required, including category.",
      variant: "destructive",
      className: "toast toast-error",
    });
    return;
  }

  // Dispatch the update action
  dispatch(updateCategory({
    categoryName: formData.category,
    newCategoryData: {
        title: formData.name,
        description: formData.description,
    }
  }));

  toast({
    title: "Success",
    description: "Widget added to category collection",
    variant: "success",
    className: "toast toast-success",
  });

  onClose()
  return

  };

  return (
    <form className='w-full' onSubmit={handleSubmit}>
      <div className='flex flex-col'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Enter widget name'
          className='border rounded-sm'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* Add the Select component for category */}
      <div className='flex flex-col mt-4'>
        <label htmlFor="category">Category:</label>
        <Select onValueChange={handleCategoryChange} value={formData.category}>
          <SelectTrigger className="border rounded-sm">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent  className="bg-white">
            <SelectItem value="CSPM Executive DashBoard">CSPM Executive DashBoard 1</SelectItem>
            <SelectItem value="Registry Scan">Registry Scan</SelectItem>
            <SelectItem value="CWPP DashBoard">CWPP DashBoard</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='flex flex-col mt-4'>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          placeholder='Enter description'
          className='border rounded-sm'
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      {/* <SheetClose > */}
        <Button className="border mt-2 bg-blue-500 hover:bg-blue-600 rounded" type="submit">Save changes</Button>
      {/* </SheetClose> */}
    </form>
  );
}
