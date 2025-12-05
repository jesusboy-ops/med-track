import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../services/firebase';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">M</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Reset Password</h2>
          <p className="mt-2 text-gray-600">
            Enter your email to receive a password reset link
          </p>
        </div>

        <Card padding="large">
          {success ? (
            <div className="text-center">
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-600">
                  Password reset email sent! Check your inbox.
                </p>
              </div>
              <Link to="/login">
                <Button className="w-full">Back to Login</Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <Input
                label="Email Address"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Button type="submit" loading={loading} className="w-full" size="large">
                Send Reset Link
              </Button>

              <div className="mt-6 text-center">
                <Link
                  to="/login"
                  className="text-sm text-blue-800 hover:text-blue-900 font-medium"
                >
                  Back to Login
                </Link>
              </div>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
