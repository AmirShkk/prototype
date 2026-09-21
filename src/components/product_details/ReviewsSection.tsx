
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import SafeIcon from '@/components/common/SafeIcon';

interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

interface ReviewsSectionProps {
  productId: string;
}

export default function ReviewsSection({ productId }: ReviewsSectionProps) {
  const mockReviews: Review[] = [
    {
      id: 'rev-001',
      author: 'Priya Sharma',
      avatar: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/4724825a-2439-475b-8668-4636bb961b21.png',
      rating: 5,
      date: '2 days ago',
      text: 'Excellent quality! The spinach was fresh and delivered on time. Will definitely order again.',
    },
    {
      id: 'rev-002',
      author: 'Vikram Patel',
      avatar: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/4724825a-2439-475b-8668-4636bb961b21.png',
      rating: 4,
      date: '1 week ago',
      text: 'Good quality produce. Packaging could be improved to prevent wilting during transit.',
    },
    {
      id: 'rev-003',
      author: 'Anjali Desai',
      avatar: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/4724825a-2439-475b-8668-4636bb961b21.png',
      rating: 5,
      date: '2 weeks ago',
      text: 'Fresh from the farm! Best quality I\'ve found. Supporting local farmers has never been easier.',
    },
  ];

  const avgRating = (mockReviews.reduce((sum, r) => sum + r.rating, 0) / mockReviews.length).toFixed(1);

  return (
    <Card className="surface-raised">
      <CardHeader>
        <CardTitle className="text-lg">Customer Reviews</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Rating Summary */}
        <div className="flex items-center gap-6 pb-4 border-b border-border">
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground">{avgRating}</div>
            <div className="flex justify-center gap-0.5 mt-1">
              {[...Array(5)].map((_, i) => (
                <SafeIcon
                  key={i}
                  name="Star"
                  size={16}
                  className={i < Math.round(parseFloat(avgRating)) ? "fill-warning text-warning" : "text-muted"}
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">{mockReviews.length} reviews</p>
          </div>

          <div className="flex-1 space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => {
              const count = mockReviews.filter(r => r.rating === rating).length;
              const percentage = (count / mockReviews.length) * 100;
              return (
                <div key={rating} className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground w-6">{rating}★</span>
                  <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-warning transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-6 text-right">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Individual Reviews */}
        <div className="space-y-4">
          {mockReviews.map((review) => (
            <div key={review.id} className="pb-4 border-b border-border last:border-0 last:pb-0">
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10 border border-border">
                  <AvatarImage src={review.avatar} alt={review.author} />
                  <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">
                    {review.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-semibold text-foreground">{review.author}</h4>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <SafeIcon
                        key={i}
                        name="Star"
                        size={12}
                        className={i < review.rating ? "fill-warning text-warning" : "text-muted"}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
