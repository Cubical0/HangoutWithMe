import mongoose, { Document, Schema } from 'mongoose';

export interface IBlog extends Document {
  slug: string;
  title: string;
  description: string;
  content: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
    designation: string;
  };
  publishedAt: Date;
  updatedAt: Date;
  readingTime: number;
  category: string;
  tags: string[];
  thumbnail: string;
  featured: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
  relatedPosts?: string[];
  faq?: {
    question: string;
    answer: string;
  }[];
  status: 'draft' | 'published' | 'archived';
}

const BlogSchema = new Schema<IBlog>({
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  readingTime: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: [{
    type: String,
    trim: true,
  }],
  thumbnail: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  seo: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    keywords: [{
      type: String,
      trim: true,
    }],
    ogImage: {
      type: String,
    },
  },
  relatedPosts: [{
    type: String,
  }],
  faq: [{
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  }],
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft',
  },
}, {
  timestamps: true,
});

// Create indexes (slug already has unique index from schema definition)
BlogSchema.index({ category: 1 });
BlogSchema.index({ tags: 1 });
BlogSchema.index({ status: 1 });
BlogSchema.index({ publishedAt: -1 });

// Pre-save middleware to update the updatedAt field
BlogSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Generate slug from title if not provided
BlogSchema.pre('save', function(next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

export default mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);